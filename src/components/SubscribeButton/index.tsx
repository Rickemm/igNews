import { signIn, useSession } from 'next-auth/react';
import { stripe } from '../../services/stripe';
import styles from './style.module.scss';

interface SubscribeButtonProps{
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps){
  const session = useSession();

  function handleSubscribe(){
    if(!session){
      signIn('github')
      return;
    }

    
  }

  return(
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}