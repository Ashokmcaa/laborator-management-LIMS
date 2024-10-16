import { Button, Flex, Table, Tooltip } from "antd";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import NewLaboratory from "./NewLaboratory";
import { useDispatch, useSelector } from "react-redux";
import { deleteLab } from "../redux/labSlice";
import { useNavigate } from "react-router-dom";

export default function Laboratory() {
  const [editLabId, setEditLabId] = useState(null);
  const [show, setShow] = useState(false);
  const [close, setClose] = useState(false);
  const navigate = useNavigate();
  const [labs, setLabs] = useState([]);

  const lab = useSelector((state) => state.labs.labs);

  useEffect(() => {
    setLabs(JSON.parse(localStorage.getItem("labData")) || lab);
  }, []);

  const header = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Cluster",
      dataIndex: "cluster",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "",
      dataIndex: "action",
      action: true,
    },
  ];
  const dispatch = useDispatch();

  const handleDeleteLab = (labId) => {
    dispatch(deleteLab(labId));
  };

  //   const change = () => {};
  return (
    <div className=" flex flex-col gap-6">
      <Flex justify="space-between">
        <div className=" flex flex-col gap-0.5 justify-start">
          <h1 className=" text-xl font-semibold text-start">Laboratory</h1>
          <p className=" text-xs opacity-45">
            Laboratory Information Management
          </p>
        </div>
        <Button
          onClick={() => {
            setShow(true);
            navigate(`/createlaboratory/0`);
          }}
          className=" bg-gray-100"
        >
          Add Laboratory
        </Button>
      </Flex>
      <Table
        // rowSelection={{
        //   type: selectionType,
        //   ...rowSelection,
        // }}
        columns={header.map((each) =>
          each.action
            ? {
                ...each,
                render: (text, _data) => (
                  <div className=" relative flex items-center justify-start gap-4">
                    <Tooltip title={"Edit"}>
                      <button
                        onClick={() => {
                          //   change("edit", _data[actionID]);
                          // setEditLabId(_data.id);
                          navigate(`/createlaboratory/${_data.id}`);

                          // setShow(true);
                        }}
                      >
                        <FaPencilAlt className="text-xs 2xl:text-sm" />
                      </button>
                    </Tooltip>
                    <Tooltip title="Delete" placement="bottom">
                      <button
                        onClick={() => {
                          //   deletefun(_data[actionID]);
                          handleDeleteLab(_data.id);
                        }}
                      >
                        <RiDeleteBin5Line className="text-xs 2xl:text-sm" />
                      </button>
                    </Tooltip>
                  </div>
                ),
              }
            : each
        )}
        dataSource={labs?.map((each) => ({
          key: each.id,
          ...each,
        }))}
        onRow={(e) => ({
          onclick: (data) => {
            console.log(e, data);
            navigate(`/labs/${e.id}`);
          },
          onClickCapture: (v) => {
            // change(v);
            // navigate(`/labs/${e.id}`);

            console.log(e, v);
          },
        })}
      />
      {/* {show && (
        <NewLaboratory
          open={show}
          labId={editLabId}
          close={() => {
            setEditLabId(null);
            setClose(true);
            setShow(false);
          }}
        />
      )} */}
    </div>
  );
}
