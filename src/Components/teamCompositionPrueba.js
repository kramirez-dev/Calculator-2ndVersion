import menos from '../menos.png';
import mas from '../mas.png';
import Select from 'react-select'

import React, { useState, Component } from 'react';
import { Container, Row, Col, Button, Toast } from 'react-bootstrap';
import CostOfEngagementComparisonComponent from '../APICalls/projectTeamCostCall';

const options = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
]

const options12 = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
    { value: 11, label: '11' },
    { value: 12, label: '12' },
]

export default class TeamCompositionFun extends React.Component {

    state = {
        selectedOptionJr: null,
        selectedOptionMid: null,
        selectedOptionSr: null,
        selectedOptionTechLead: null,
        selectedOptionQa: null,
        selectedOptionMonth: null,
        jr: 0,
        mid: 0,
        sr: 0,
        techLead: 0,
        qa: 0,
        month: 0
    };
    handleChangeJr = selectedOptionJr => {
        this.setState({
            selectedOptionJr,
            jr: selectedOptionJr.value,
        });
    };
    handleChangeMid = selectedOptionMid => {
        this.setState({
            selectedOptionMid,
            mid: selectedOptionMid.value
        });
    };
    handleChangeSr = selectedOptionSr => {
        this.setState({
            selectedOptionSr,
            sr: selectedOptionSr.value
        });
    };
    handleChangeTechLead = selectedOptionTechLead => {
        this.setState({
            selectedOptionTechLead,
            techLead: selectedOptionTechLead.value
        });
    };
    handleChangeQa = selectedOptionQa => {
        this.setState({
            selectedOptionQa,
            qa: selectedOptionQa.value
        });
    };
    handleChangeMonth = selectedOptionMonth => {
        this.setState({
            selectedOptionMonth,
            month: selectedOptionMonth.value,
        });
    };

    handleResetValues = () => {
        console.log(this.state.jr)
        this.setState({
            jr: 0,
            mid: 0,
            sr: 0,
            techLead: 0,
            qa: 0,
            month: 0,
            selectedOptionJr: null,
            selectedOptionMid: null,
            selectedOptionSr: null,
            selectedOptionTechLead: null,
            selectedOptionQa: null,
            selectedOptionMonth: null
        });
    };

    btnResetDisabled = () => {
        if (this.state.jr != 0 || this.state.selectedOptionJr != null ||
            this.state.mid != 0 || this.state.selectedOptionMid != null ||
            this.state.sr != 0 || this.state.selectedOptionSr != null ||
            this.state.qa != 0 || this.state.selectedOptionQa != null ||
            this.state.techLead != 0 || this.state.selectedOptionTechLead != null ||
            this.state.month != 0 || this.state.selectedOptionMonth != null) {
            return false
        } else {
            return true
        }
    }

    render() {
        const { selectedOptionJr } = this.state;
        const { selectedOptionMid } = this.state;
        const { selectedOptionSr } = this.state;
        const { selectedOptionTechLead } = this.state;
        const { selectedOptionQa } = this.state;
        const { selectedOptionMonth } = this.state;
        const colourStyles = {
            /*option: (styles, { data, isDisabled, isFocused, isSelected }) => { 
                return {
                    ...styles,
                    backgroundColor: isDisabled
                      ? null
                      : isSelected
                      ? data.color
                      : isFocused
                      ? "red"
                      : null,
                    color: isDisabled
                      ? '#ccc'
                      : isSelected
                      ? "purple"
                        ? 'white'
                        : 'black'
                      : "blue",
                    cursor: isDisabled ? 'not-allowed' : 'default',
              
                    ':active': {
                      ...styles[':active'],
                      backgroundColor: !isDisabled && (isSelected ? "white" : "green"),
                    },
                };
            },*/
        }
        return (
            <div>
                <Container className="mt-4">
                    <h1 className="center text-blue mb-4">Total Cost of Engagement Calculator</h1>
                    <h2 className="text-blue">Build your team</h2>
                    <Row>
                        <Col md={4} className="mb-2">
                            <label>Lead Developer</label>
                            <Select
                                value={selectedOptionTechLead}
                                onChange={this.handleChangeTechLead}
                                options={options}
                                defaultValue={options[0]}
                                styles={colourStyles}
                            />
                        </Col>
                        <Col md={4} className="mb-2">
                            <label>Senior Developer</label>
                            <Select
                                value={selectedOptionSr}
                                onChange={this.handleChangeSr}
                                options={options}
                                defaultValue={options[0]}
                            />
                        </Col>
                        <Col md={4} className="mb-2">
                            <label>Mid-Level Developer</label>
                            <Select
                                value={selectedOptionMid}
                                onChange={this.handleChangeMid}
                                options={options}
                                defaultValue={options[0]}
                            />
                        </Col>
                    </Row>

                    <Row >
                        <Col md={4} className="mb-2">
                            <label>Jr Developer</label>
                            <Select
                                value={selectedOptionJr}
                                onChange={this.handleChangeJr}
                                options={options}
                                defaultValue={options[0]}
                            />
                        </Col>
                        <Col md={4} className="mb-2">
                            <label>QA Engineer</label>
                            <Select
                                value={selectedOptionQa}
                                onChange={this.handleChangeQa}
                                options={options}
                                defaultValue={options[0]}
                            />
                        </Col>
                    </Row>

                    <h2 className="mt-4 text-blue">Project Duration</h2>
                    <Row>
                        <Col md={4}>
                            <label>Months</label>
                            <Select
                                value={selectedOptionMonth}
                                onChange={this.handleChangeMonth}
                                options={options12}
                                defaultValue={options12[0]}
                            />
                        </Col>
                    </Row>
                    <Row>
                    <Col className="mt-3 center">
                            <Button
                                variant="primary"
                                onClick={this.handleResetValues}
                                disabled={this.btnResetDisabled()}>
                                Reset values
                            </Button>
                        </Col>
                    </Row>
                    {/*}
                    <h2 className="mt-4">Team Composition</h2>
                    <Row >
                        <Col md={6}>
                            <Table className="resp-table2 center" bordered size="sm">
                                <thead className="tex-white">
                                    <tr className="color">
                                        <th>Developers/Engineers</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                     <td>Lead Developer</td>  
                                        <td>
                                            {this.state.techLead}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Senior Developer</td>
                                        <td>
                                            {this.state.sr}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mid-Level Developer</td>
                                        <td>
                                            {this.state.mid}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Junior Developer</td>
                                        <td>
                                            {this.state.jr}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>QA Engineer</td>
                                        <td>
                                            {this.state.qa}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
        {*/}
                </Container>
                <CostOfEngagementComparisonComponent
                    jr={this.state.jr}
                    mid={this.state.mid}
                    sr={this.state.sr}
                    tech={this.state.techLead}
                    qa={this.state.qa}
                    month={this.state.month}
                />
            </div>
        );
    }
}