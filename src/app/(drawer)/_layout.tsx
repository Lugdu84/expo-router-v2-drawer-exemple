import { Drawer } from 'expo-router/drawer';
import CustomDrawer from 'src/components/custom-drawer';

export default function DrawerLayout() {
	return (
		<Drawer
			drawerContent={(props) => <CustomDrawer {...props} />}
			screenOptions={{ headerShown: false }}>
			<Drawer.Screen
				name="pictures"
				options={{ headerShown: true }}
			/>
			<Drawer.Screen
				name="videos"
				options={{ headerShown: true }}
			/>
		</Drawer>
	);
}
