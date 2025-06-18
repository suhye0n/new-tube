import { UserCircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';

export const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500/20 rounded-full shadow-none"
          >
            <UserCircleIcon />
            로그인
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
