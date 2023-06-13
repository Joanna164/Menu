class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "herbarta", active: true },
      { id: 2, name: "ziemniaczki", active: false },
      { id: 3, name: "kasza", active: false },
      { id: 4, name: "zupa wodna", active: false },
      { id: 5, name: "wrzątek", active: false },
      { id: 6, name: "chleb", active: true },
    ],
  };

  handleChangeStatus = (id) => {
    // console.log("działa");
    const items = this.state.items.map((item) => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });
    this.setState({
      items: items,
      // lub mozna wpisać items ze względu na te same nazwy
    });
  };

  render() {
    return (
      <>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </>
    );
  }
}
