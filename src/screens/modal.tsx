import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Box, Text, makeStyles } from 'theme';

import EditScreenInfo from '../components/edit-screen-info';

export default function Modal() {
  const styles = useStyles();

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Text variant="title">Modal</Text>
      <Box style={styles.separator} />
      <EditScreenInfo path="src/screens/modal.tsx" />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  separator: {
    backgroundColor: theme.colors.gray,
    height: 1,
    marginVertical: theme.spacing.l_32,
    opacity: 0.25,
    width: '80%',
  },
}));
