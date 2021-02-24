import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIssues } from "./features/issues/IssueSlice";
import Issue from "./components/Issue";
import Pagination from "./components/Pagination";
import _ from "lodash";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const state = useSelector(state => state);

  const dispach = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [searchDone, setSearchDone] = useState("");
  const [issues, setIssues] = useState([]);

  const handleOnChange = page => {
    setCurrentPage(page);
    const newissues = paginate(state.list, page, pageSize);
    setIssues(newissues);
  };
  const handleSearch = search => {
    const results = _.filter(state.list, function(item) {
      return item.title.indexOf(search) > -1;
    });
    setSearchDone(search);
    setIssues(results);
  };

  const paginate = (items, currentPage, pageSize) => {
    let startIndex = (currentPage - 1) * pageSize;
    return _(items)
      .slice(startIndex)
      .take(pageSize)
      .value();
  };
  useEffect(() => {
    dispach(getIssues());
  }, []);
  useEffect(() => {
    const newissues = paginate(state.list, currentPage, pageSize);
    setIssues(newissues);
  }, [state.list]);

  return (
    <>
      <Navbar handleSearch={handleSearch} />

      <div className="container-fluid">
        <ul className="list-group mt-3">
          {issues.map((i, index) => {
            return <Issue key={index} value={i} />;
          })}
        </ul>

        {!searchDone && (
          <Pagination
            totalSize={state.list.length}
            currentPage={currentPage}
            handleOnChange={handleOnChange}
          />
        )}
      </div>
    </>
  );
}

export default App;
