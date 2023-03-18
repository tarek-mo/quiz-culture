import { Link } from "react-router-dom";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Quizz Culture</strong>
      <p>
        Get started by either <Link to="/login">Logging In</Link> or
        <Link to="/signup"> Signing Up</Link>
      </p>
    </div>
  );
};

export default ExploreContainer;
