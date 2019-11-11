import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/Container"

console.log(styles)

const User = props => {
	return (
		<div className={styles.user}>
			<img src={props.avatar} className={styles.avatar} />
			<div className={styles.description}>
				<h2 className={styles.username}>{props.username}</h2>
				<p className={styles.excerpt}>{props.excerpt}</p>
			</div>
		</div>
	)
}

const usersData = [
	{
		username: "Jane Doe",
		avatar:
			"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg",
		excerpt: "😎🚀 Gatsby is super cool!",
	},
	{
		username: "John Deer",
		avatar:
			"https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg",
		excerpt: "Theres something with gatsby why it is super cool 🤔",
	},
]

export default () => {
	return (
		<Container>
			<h1>ABOUT CSS MODULES</h1>
			<p>CSS MODULES ARE 😎</p>
			{usersData.map(({ username, avatar, excerpt }) => (
				<User username={username} avatar={avatar} excerpt={excerpt} />
			))}
		</Container>
	)
}
