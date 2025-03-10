import DynamicForm from "./components/DynamicForm";
import { formSchema } from "./data/schema"; // Adjust the import path as needed

export default function App() {
  const handleSubmit = (formData) => {
    console.log("Form Data Submitted:", formData);
    // You can send the form data to an API or perform other actions here
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dynamic Form</h1>
      <DynamicForm schema={formSchema} onSubmit={handleSubmit} />
    </div>
  );
}
