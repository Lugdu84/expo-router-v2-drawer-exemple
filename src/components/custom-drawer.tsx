import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItem,
} from '@react-navigation/drawer';
import { router, usePathname } from 'expo-router';
import { View, Text } from 'react-native';
import { TabBarIcon } from './tabs-items';

export default function CustomDrawer(props: DrawerContentComponentProps) {
	const pathname = usePathname();
	return (
		<DrawerContentScrollView {...props}>
			<DrawerItem
				icon={() => (
					<TabBarIcon
						focused={pathname === '/pictures'}
						name="picture"
					/>
				)}
				label="Pictures"
				style={{
					backgroundColor:
						pathname === '/pictures' ? 'lightgreen' : 'transparent',
				}}
				labelStyle={{
					color: pathname === '/pictures' ? 'green' : 'gray',
					marginLeft: -20,
				}}
				onPress={() => router.push('/pictures')}
			/>
			<DrawerItem
				icon={() => (
					<TabBarIcon
						focused={pathname === '/videos'}
						name="youtube"
					/>
				)}
				label="Videos"
				style={{
					backgroundColor:
						pathname === '/videos' ? 'lightgreen' : 'transparent',
				}}
				labelStyle={{
					color: pathname === '/videos' ? 'green' : 'gray',
					marginLeft: -20,
				}}
				onPress={() => router.push('/videos')}
			/>
			<DrawerItem
				icon={() => (
					<TabBarIcon
						focused={pathname === '/setting'}
						name="user"
					/>
				)}
				label="Settings"
				style={{
					backgroundColor:
						pathname === '/setting' ? 'lightgreen' : 'transparent',
				}}
				labelStyle={{
					color: pathname === '/setting' ? 'green' : 'gray',
					marginLeft: -20,
				}}
				onPress={() => router.push('/(drawer)/(tabs)/setting')}
			/>
		</DrawerContentScrollView>
	);
}
