import { Slot, Tabs } from 'expo-router';
import { TabBarIcon, TabBarLabel } from 'src/components/tabs-items';

export default function TabsLaout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarLabel
							focused={focused}
							label="Home"
						/>
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon
							focused={focused}
							name="home"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="contact"
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarLabel
							focused={focused}
							label="Contact"
						/>
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon
							focused={focused}
							name="contacts"
						/>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="setting"
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarLabel
							focused={focused}
							label="Setting"
						/>
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon
							focused={focused}
							name="setting"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="[user]"
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarLabel
							focused={focused}
							label="Profil"
						/>
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon
							focused={focused}
							name="user"
						/>
					),
					href: {
						pathname: '/[user]',
						params: {
							user: 'David',
						},
					},
				}}
			/>
		</Tabs>
	);
}
