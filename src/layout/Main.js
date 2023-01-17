import styled from "styled-components";
import List from "../components/List";
import Paging from "../components/Pagination";
import Search from "../components/Search";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

const BackDiv = styled.div`
  background-color: #f3f3f3;
  // flex-direction: row;
  // display: flex;
  height: 100vh;
  weight: 100vh;
`;

function Main() {
  const [dataset, setDataset] = useState();
  const [itemset, setItemset] = useState([]);
  const [itemnum, setItemnum] = useState(0);
  const [itemname, setItemname] = useState("");
  const [itembrand, setItembrand] = useState("");
  const [itemdetail, setItemdetail] = useState("");
  const [itemprice, setItemprice] = useState(0);
  const [itemrate, setItemrate] = useState(0);
  const [itemstock, setItemstock] = useState(0);

  const getDatas = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    return res.json();
  };

  const { data, error, isLoading } = useQuery("randomFacts", getDatas);

  useEffect(() => {
    getDatas();
    setDataset(data);

    //setItemset(dataset.products);
    //console.log(itemset);
  }, []);

  console.log(dataset);
  console.log(dataset.products);

  return (
    <BackDiv>
      <Search />
      <List>
        {/* {dataset.products &&
          dataset.products.map((data) => (
            <div key={data.products.id} value={data.products.id}>
              <div>{data.products.id}</div>
              <div>{data.products.title}</div>
            </div>
          ))} */}
      </List>
      <Paging />
    </BackDiv>
  );
}
export default Main;
