import { Component } from "react";

class SearchBox extends Component {
  
    render() {
        const {onChangeHandler} = this.props;
        const {placeholder} = this.props;
        const {className} = this.props;
        return (
            <div>
                <input
                    className={className}
                    type='search'
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
            </div>
        )
    }

}

export default SearchBox;