import { View, Text } from 'react-native';
import React from 'react';
import { Stack, useGlobalSearchParams } from 'expo-router';

export default function ProfilScreen() {
	const { user } = useGlobalSearchParams();
	return (
		<View>
			<Stack.Screen options={{ title: user as string }} />
			<Text>ProfilScreen</Text>
		</View>
	);
}
