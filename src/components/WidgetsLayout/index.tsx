import React, { useState } from "react";

const WidgetsLayout = () => {
  const [widgets, setWidgets] = useState<JSX.Element[]>([]);

  const handleRemoveClick = (index: number) => {
    const newWidgets = [...widgets];
    newWidgets.splice(index, 1);
    setWidgets(newWidgets);
  };

  const handleAddClick = () => {
    const newWidgets = [...widgets, <WidgetsLayout key={widgets.length} />];
    setWidgets(newWidgets);
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
  };

  const widgetStyle: React.CSSProperties = {
    flex: "1 1 200px",
    margin: "10px",
    border: "1px solid #ccc",
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: "#eee",
    padding: "10px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "1.2rem",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#f00",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    marginBottom: "10px",
  };

  const contentStyle: React.CSSProperties = {
    padding: "10px",
  };

  return (
    <>
      <button style={buttonStyle} onClick={handleAddClick}>
        Add Widget
      </button>
      <div style={containerStyle}>
        {widgets.map((widget, index) => {
          return (
            <div key={index} style={widgetStyle}>
              <div style={headerStyle}>
                <div>Widget</div>
                <button
                  style={{
                    ...buttonStyle,
                    padding: "5px",
                    fontSize: "1.2rem",
                    lineHeight: "1",
                  }}
                  onClick={() => handleRemoveClick(index)}
                >
                  x
                </button>
              </div>
              <div style={contentStyle}>
                <p>This is some example content for the widget.</p>
                <p>You can add your own content here.</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WidgetsLayout;
