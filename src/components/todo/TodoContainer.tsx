/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetTodosQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  //from local state
  // const { todos } = useAppSelector((state) => state.todos);

  ///from server
  const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);
  // } = useGetTodosQuery(undefined, { pollingInterval: 1000 });
  console.log(todos);
  if (isLoading) {
    return <p>Loading... </p>;
  }
  return (
    <div>
      <div className="flex justify-between">
        <AddTodoModal />

        <TodoFilter />
      </div>

      <div className="bg-primary-gradient w-full rounded-xl  space-y-3 p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg">
          {todos?.data?.map((item) => (
            <TodoCard {...item}></TodoCard>
          ))}
        </div>
        {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md ">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
