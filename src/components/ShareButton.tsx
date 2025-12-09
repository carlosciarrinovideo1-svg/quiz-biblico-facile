import React from 'react';
import { Share2, Facebook, Twitter, MessageCircle, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

interface ShareButtonProps {
  title?: string;
  text?: string;
  url?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ 
  title = 'Scripture Study App', 
  text = 'Test your Bible knowledge!', 
  url = window.location.href 
}) => {
  const { t } = useLanguage();
  const [copied, setCopied] = React.useState(false);

  const shareData = {
    title,
    text,
    url,
  };

  const handleShare = async (platform: string) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(`${title} - ${text}`);

    switch (platform) {
      case 'native':
        if (navigator.share) {
          try {
            await navigator.share(shareData);
          } catch (err) {
            console.log('Share cancelled');
          }
        }
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodedText}%20${encodedUrl}`, '_blank');
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        setCopied(true);
        toast.success(t('linkCopied'));
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {navigator.share && (
          <DropdownMenuItem onClick={() => handleShare('native')}>
            <Share2 className="mr-2 h-4 w-4" />
            {t('shareNative')}
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => handleShare('facebook')}>
          <Facebook className="mr-2 h-4 w-4" />
          Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('twitter')}>
          <Twitter className="mr-2 h-4 w-4" />
          Twitter / X
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('whatsapp')}>
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('copy')}>
          {copied ? (
            <Check className="mr-2 h-4 w-4" />
          ) : (
            <Copy className="mr-2 h-4 w-4" />
          )}
          {t('copyLink')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareButton;
