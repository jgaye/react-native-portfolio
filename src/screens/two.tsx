import { Box, Text, makeStyles } from 'theme';

import EditScreenInfo from '../components/edit-screen-info';

export default function TabTwoScreen() {
  const styles = useStyles();

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text variant="title">Tab Two</Text>
      <Box style={styles.separator} />
      <EditScreenInfo path="src/screens/two.tsx" />
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
