import { useState } from "react";
import useModelInfo from "../../Hooks/UseBrandModels";
import Card from "../Cards/Card";
import Pagination from "../Pagination/Pagination";

function Apple() {
  const AppleModels = useModelInfo("Apple");

  let allModels = [];

  let models = Object.values(AppleModels);

  models.map((eachModel) => {
    let modelDetails = eachModel.phoneDetails;
    allModels.push(modelDetails);
  });

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(15);

  // Get Current Post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = allModels.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="mx-3">
        <Card posts={currentPost} loading={loading} setLoading={setLoading} />
      </div>
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={allModels.length}
        paginate={paginate}
      />
    </>
  );
}

export default Apple;
