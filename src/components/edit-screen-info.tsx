import React from 'react';
import { Box, Text } from 'theme';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <Box>
      <Box alignItems="center" marginHorizontal="xl_64">
        <Text variant="body" lineHeight={24} textAlign="center">
          Open up the code for this screen:
        </Text>

        <Box borderRadius="s_3" paddingHorizontal="xs_4" marginVertical="s_8">
          <Text>{path}</Text>
        </Box>

        <Text variant="body" lineHeight={24} textAlign="center">
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </Box>
    </Box>
  );
}
