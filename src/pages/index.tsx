import type { InferGetServerSidePropsType } from "next";

import { TodoCard } from "components/TodoCard";
import { supabaseClient } from "supabaseClient";
import type { Todo } from "models";

export const getServerSideProps = async () => {
	const { data: todos, error } = await supabaseClient
		.from<Todo>("todos")
		.select("*")
		.order("createdAt", { ascending: false });

	return { props: { todos: error ? [] : todos || [] } };
};

const HomePage = ({
	todos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<>
			<h1>Home Page</h1>
			{todos.map((todo) => {
				return <TodoCard {...todo} key={todo.id} />;
			})}
		</>
	);
};

export default HomePage;
