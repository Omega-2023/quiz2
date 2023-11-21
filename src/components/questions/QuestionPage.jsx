import QuestionSpace from "./QuestionSpace.jsx";
function QuestionPage() {
  return (
    <div className="w-full h-[90vh] overflow-y-auto mb-5 grid grid-cols-12">
      <div className="h-full col-span-full">
        <QuestionSpace />
      </div>
    </div>
  );
}

export default QuestionPage;
