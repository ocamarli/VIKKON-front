import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function CardParameter(props) {
  const { id_parameter, name } = props;

  return (
    <Card variant="outlined" style={{ justifyContent: "center" }}>
      <CardContent sx={{ padding: 1, margin: 0 }}>
        <Typography
          sx={{ fontWeight: 300, color: "#5ECA58", margin: 0, fontSize: 12 }}
        >
          {name}
        </Typography>
        <Typography sx={{ fontSize: 12, margin: 0 }}>{id_parameter}</Typography>
      </CardContent>
    </Card>
  );
}

export default CardParameter;
