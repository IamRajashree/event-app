import styled from "styled-components";

const WindowContainer = styled.div`
  position: absolute;
  border: 2px solid;
  border-color: #ffffff #808080 #808080 #ffffff;
  background: #c0c0c0;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  min-width: 300px;
  min-height: 100px;
  width: ${(props) => props.width || "400px"};
  

   @media (max-width: 880px) {
    left: 5vw !important; 
    top: 5vh !important;  
    width: 50vw ; 
    max-height: 70vh;
  }
   
  @media(max-width: 400px){
  width:30vw; !important}
`;

const TitleBar = styled.div`
  background: linear-gradient(90deg, #000080, #1084d0);
  color: white;
  padding: 3px 5px;
  font-family: "MS Sans Serif", sans-serif;
  font-size: 11px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  cursor: move;
`;

const WindowContent = styled.div`
  padding: 8px;
  font-family: "MS Sans Serif", sans-serif;
  font-size: 11px;
`;

export default function Window98Window({
  title,
  children,
  defaultPosition,
  onClose,
  $width,
  scrollable = false,
}) {
  return (
    <WindowContainer
      style={{
        left: defaultPosition?.x,
        top: defaultPosition?.y,
        overflow: scrollable ? "hidden" : "visible",
      }}
      $width={$width}
    >
      <TitleBar className="handle">
        <span>{title}</span>
        <span onClick={onClose} style={{ cursor: "pointer" }}>
          X
        </span>
      </TitleBar>
      <WindowContent
        style={{
          overflowY: scrollable ? "auto" : "visible",
          maxHeight: scrollable ? "500px" : "none",
        }}
      >
        {children}
      </WindowContent>
    </WindowContainer>
  );
}
