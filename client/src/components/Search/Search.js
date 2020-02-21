import React from "react";
import "../../assets/css/testStyle.css";
import {
  Row,
  Col,
  Input,
  Table,
  Modal,
  ModalBody,
  ModalHeader,
  Card,
  Badge,
  Container,
  CardBody
} from "reactstrap";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagList: ["tag one", "tag two", "tag three", "tag four", "tag five"],
      addTagsList: []
    };

    this.removeTags = this.removeTags.bind(this);
    this.addTags = this.addTags.bind(this);
  }

  removeTags(tag) {
    const list = this.state.addTagsList.slice(),
      tagList = this.state.tagList;
    tagList.push(tag);
    list.some((el, i) => {
      if (el === tag) {
        list.splice(i, 1);
        return true;
      }
    });
    this.setState({
      addTagsList: list,
      tagList
    });
  }

  addTags(tag) {
    const tagList = this.state.tagList.slice(),
      addTagsList = this.state.addTagsList;
    addTagsList.push(tag);

    tagList.some((el, i) => {
      if (el === tag) {
        tagList.splice(i, 1);
        return true;
      }
    });

    this.setState({
      tagList,
      addTagsList
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <List
              tagList={this.state.tagList}
              removeTags={this.removeTags}
              addTagsList={this.state.addTagsList}
              addTags={this.addTags}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredTags: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      filteredTags: this.props.tagList
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredTags: nextProps.tagList
    });
  }

  handleChange(e) {
    let currentList = [],
      newList = [];

    if (e.target.value !== "") {
      currentList = this.props.tagList;
      newList = currentList.filter(tag => {
        const lc = tag.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.props.tagList;
    }
    this.setState({
      filteredTags: newList
    });
  }

  render() {
    return (
      <Row>
        <Col lg="6">
          <h4>Tags</h4>
          <Card className="border-0">
            {this.props.addTagsList.length > 0 ? (
              <div className="bg-white border p-2 rounded">
                {this.props.addTagsList.map(tag => (
                  <Badge color="secondary mr-2 p-2 tag-text rounded-pill text-white text-capitalize">
                    {tag}
                    <span
                      className="close-btn"
                      onClick={e => this.props.removeTags(tag)}
                    >
                      &nbsp;X
                    </span>
                  </Badge>
                ))}
              </div>
            ) : (
              ""
            )}
            <div className="p-2 tag-search-result">
              <Input
                type="text"
                onChange={this.handleChange}
                placeholder="Search..."
                className="font-italic"
              />

              {this.state.filteredTags.map(tag => (
                <div
                  className="text-capitalize my-2 tag-list-item"
                  key={tag}
                  onClick={() => this.props.addTags(tag)}
                >
                  {tag} &nbsp;
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default Search;
