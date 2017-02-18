import React from 'react'
import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native'

const DEFAULT_AVATAR = 'https://flipagram.com/assets/resources/img/fg-avatar-anonymous-user-retina.png'
const AVATAR_SIZE = 32

const Comment = (props) => 
	<View style={styles.comment}>
	<View style={styles.contentName}>
			{
				props.avatar ?
				<Image style={styles.avatar} source={{uri: props.avatar}}/> :
				<Image style={styles.avatar} source={{uri: DEFAULT_AVATAR}}/>
			}
			{
				props.name ?
				<Text style={styles.name}>{props.name}</Text> :
				<Text style={styles.name}>Avatar de prueba</Text>
			}
		</View>
		<Text style={styles.text}>{props.text}</Text>
	</View>

const styles = StyleSheet.create({
	comment: {
		backgroundColor: '#ecf0f1',
		padding: 10,
		margin: 5,
		borderRadius: 5,
		flexDirection: 'column',
	},
	text: {
		// marginLeft: 10,
		fontSize: 16,
	},
	contentName: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'flex-end',
		marginBottom: 5
	},
	name: {
		color: '#e74c3c',
	},
	avatar:{
		width: AVATAR_SIZE,
		height: AVATAR_SIZE,
		borderRadius: AVATAR_SIZE / 2,
	}
})

export default Comment