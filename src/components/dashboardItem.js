import { Button } from "@mui/material";
import Box from "@mui/material/Box";
const DashBoardItem = (props) => {
  console.log(props.data);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 2, width: "90%", marginLeft: "5%" },
      }}
      autoComplete="off"
      className="inner"
    >
      <div className="panel">
        <div className="topimage">Top Image</div>

        <h4>{props.data.Name}</h4>
        <div>{props.data.Desc}</div>
        <div className="button">
          <Button>Add to Cart</Button>
        </div>
      </div>
    </Box>
  );
};
export default DashBoardItem;
