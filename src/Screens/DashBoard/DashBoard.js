import React from "react";
import CustomText from "../../Components/CustomText";
import Spacer from "../../Components/Spacer";

const DashBoard = () => {
  const navArray = [
    {
      id: 1,
      name: "DashBoard",
    },
    {
      id: 2,
      name: "Microcourses approval",
    },
    {
      id: 3,
      name: "Educators",
    },
    {
      id: 4,
      name: "Payments",
    },
    {
      id: 5,
      name: "Live and trending microcourses",
    },
  ];

  const eduArray = [
    {
      id: 1,
      name: "<educator name> uploaded new micro-course for approval and edits view here",
    },
    {
      id: 2,
      name: "<educator name> uploaded new micro-course for approval and edits view here",
    },
    {
      id: 3,
      name: "<educator name> uploaded new micro-course for approval and edits view here",
    },
    {
      id: 4,
      name: "<educator name> uploaded new micro-course for approval and edits view here",
    },
    {
      id: 5,
      name: "<educator name> uploaded new micro-course for approval and edits view here",
    },
  ];

  return (
    <div style={{ width: "auto" }}>
      <Spacer height={50} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div>
          {navArray.map((item, index) => (
            <div
              style={{
                height: 50,
                width: 220,
                backgroundColor: item.id == 2 ? "#8B17FF" : "lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <CustomText title={item.name} fontSize={12} />
            </div>
          ))}
        </div>
        <div>
          {eduArray.map((item, index) => (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                }}
              >
                <div
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: "lightgrey",
                    borderRadius: 50,
                  }}
                ></div>
                <Spacer width={15} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CustomText title={item.name} fontSize={12} />
                </div>
              </div>
              <Spacer height={30} />
            </>
          ))}
        </div>

        <div>
          <CustomText title="Status" fontSize={14} />
          <Spacer height={30} />
          <div
            style={{
              height: 30,
              width: 80,
              backgroundColor: "lightgrey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <CustomText title="Pending" fontSize={12} />
          </div>
          <Spacer height={50} />
          <div
            style={{
              height: 30,
              width: 130,
              backgroundColor: "lightgrey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <CustomText title="Edit Upload and live" fontSize={12} />
          </div>
        </div>

        <div>
          <CustomText title="Status 2" fontSize={14} />
          <Spacer height={30} />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <CustomText title="Live and Trending" fontSize={12} />
          </div>
          <Spacer height={30} />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <CustomText title="add to live and trending" fontSize={12} />
          </div>
          <Spacer height={30} />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <CustomText title="Take off of live and trending" fontSize={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
