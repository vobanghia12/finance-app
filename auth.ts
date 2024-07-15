import NextAuth from 'next-auth';
import google from 'next-auth/providers/google';
import apple from 'next-auth/providers/apple';
import type { Provider } from 'next-auth/providers';

//create the list of providers
const providers: Provider[] = [apple, google];

//parsing the data to help writing the mapping for multiple providers easily
export const providerMap = providers.map((provider) => {
  if (typeof provider === 'function') {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  pages: {
    signIn: '/signin',
  },
});
