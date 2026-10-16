export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center bg-blue-400 rounded-2xl *:font-bold *:text-white px-5 py-10">
        <span className="text-7xl ">25:00</span>
        <div className="flex gap-7 mt-5 text-lg">
          <span className="bg-blue-300 rounded-full px-4">Pomodoro</span>
          <span>Short Break</span>
          <span>Long Break</span>
        </div>
      </div>
      <div className="flex gap-5 text-lg mt-5 *:rounded-xl *:px-5 *:py-1">
        <button className="bg-green-200 ">Start</button>
        <button className="bg-red-200">Reset</button>
      </div>
    </div>
  );
}
