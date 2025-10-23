import { Button, Stack, Title } from '@mantine/core';

export default function HomePage() {
  return (
    <Stack align="center" mt={50}>
      <Title order={1}>Welcome to DiceOut Fitness</Title>
      <Button>This is a Mantine Button!</Button>
    </Stack>
  );
}