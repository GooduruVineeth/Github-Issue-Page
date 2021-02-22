import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIssues } from "./features/issues/IssueSlice";
import Issue from "./components/Issue";
import Pagination from "./components/Pagination";
import _ from "lodash";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  const state = useSelector(state => state);

  const dispach = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(9);

  const handleOnChange = page => {
    setCurrentPage(page);
  };

  console.log("App state--> 2", state);

  const paginate = (items, currentPage, pageSize) => {
    let startIndex = (currentPage - 1) * pageSize;
    return _(items)
      .slice(startIndex)
      .take(pageSize)
      .value();
  };
  useEffect(() => {
    dispach(getIssues());
    console.log("App state--> 1", state);
  }, []);

  const issues = paginate(state.list, currentPage, pageSize);
  const pages=[1,2,3,4,5];

  return (
    <div className="container-fluid">
      <Navbar />

      {console.log("App state--> 3", state)}
      <ul className="list-group mt-3">
        {issues.map((i, index) => {
          return <Issue value={i} />;
        })}
      </ul>

     <Pagination totalSize={state.list.length} currentPage={currentPage} handleOnChange={handleOnChange}/>
   
      
    </div>
  );
}

export default App;


