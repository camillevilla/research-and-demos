import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'minimal_redux_poc';

class ManifestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue: '',
            lastRequested: '',
            content: 'Nothing Selected Yet'
        };
        this.fetchManifest = this.fetchManifest.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        // m3core.store.subscribe(()=>{
        //     let manifest = m3core.store.getState().manifests[this.state.lastRequested];

        //     if (manifest) {
        //         if (manifest.isFetching) {
        //             this.setState({
        //                 content: '☕'
        //             });
        //             return;
        //         } else if (manifest.error) {
        //             this.setState({
        //                 content: manifest.error.message
        //             });
        //             return;
        //         }

        //         this.setState({
        //             content: JSON.stringify(manifest.json, 0, 2)
        //         });
        //     }
        // });
    }
    fetchManifest(event) {
        event.preventDefault();
        console.log(this.state.formValue);
        let f = actions.fetchManifest(this.state.formValue);
        let { dispatch } = this.props;
        this.setState({
            lastRequested: this.state.formValue
        });
        dispatch(f);
    }
    handleInputChange(event) {
        let _this = this;
        event.preventDefault();
        _this.setState({
            formValue: event.target.value
        });
    }
    render() {
        // let manifest = m3core.store.getState().manifests[Object.keys(m3core.store.getState().manifests)[0]];

        let { manifests } = this.props;
        console.log(manifests);

        return (
                <div className="App">
                <form onSubmit={this.fetchManifest}>
                <input value={this.state.formValue} id="manifestURL" type="text" onChange={this.handleInputChange}/>

                <button id="fetchBtn" type="submit">Fetch Manifest</button>
                <pre id="exampleManifest">
                { this.state.content }
            </pre>
                </form>
                </div>
        );
    }
}

export default connect((state) => state)(ManifestComponent);
