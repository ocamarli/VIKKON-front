import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function CardParameter(props) {
  const { parameter} = props;
console.log(parameter)
  return (
    <Card variant="outlined" style={{ justifyContent: "center", height:"100%" }}>
      <CardContent >
        <Typography
          sx={{ fontWeight: 500, margin: 0, display:"block"}}
          variant="h6"
        >
          {parameter.name}
        </Typography>
        <Typography variant="body2" sx={{ margin: 0, display:"block" }}>{parameter.id_parameter}</Typography>
        <Typography variant="body2" sx={{ margin: 0, display:"block" }} color="text.secondary">{parameter.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default CardParameter;
