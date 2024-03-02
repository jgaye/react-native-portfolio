import 'react-native-gesture-handler';

import { ThemeProvider } from '@shopify/restyle';
import { Amplify } from 'aws-amplify';
import { theme } from 'theme';

import amplifyconfig from './src/amplifyconfiguration.json';
import RootStack from './src/navigation';
Amplify.configure(amplifyconfig);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootStack />
    </ThemeProvider>
  );
}
