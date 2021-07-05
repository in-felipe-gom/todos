import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";

import { supabaseClient } from "supabaseClient";
import type { Todo } from "models";

type Props = Todo;

export const TodoCard = ({ id, content, done, title }: Props) => {
	return (
		<Card title={title}>
			<p>{content}</p>
			<label htmlFor={id} className="p-checkbox-label p-mr-2">
				Done?
			</label>
			<Checkbox
				inputId={id}
				checked={done}
				onChange={async (event) => {
					const { error } = await supabaseClient
						.from<Todo>("todos")
						.update({ done: event.target.checked })
						.eq("id", id);

					if (error) {
						alert("Something went wrong. Please, try again.");

						return;
					}

					window.location.reload();
				}}
			/>
		</Card>
	);
};
