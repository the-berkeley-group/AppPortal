/* Enum for different question types */
const QuestionType = {
    TEXT  : 0,
    INPUT : 1,
    RADIO : 2
};

/* String constants for section titles */
const CategoryTitles = {
    PERSONAL : "Personal Information",
    ESSAY    : "Essay Questions",
    QUESTION : "Questionnaire",
    EXTRA    : "Extra Questions",
    UPLOAD   : "Upload Documents",
}

/**
 * @prop type      - type of this section view
 * @prop responses - the responses for this section
 * @prop onChange  - callback function when inputs change
 */
class SectionView extends React.Component {

    _mapResponses = (response) => {
        const typeToComponent = {
            [QuestionType.TEXT]  : TextQuestion,
            [QuestionType.INPUT] : InputQuestion,
            [QuestionType.RADIO] : RadioQuestion
        };
        const ApplicationQuestion = typeToComponent[response.question.qtype];
        return (
            <ApplicationQuestion response = {response}
                                 onChange = {this.props.onChange}
                                 key      = {response.id} />
        );
    }

    render() {
        const scrollTarget = ScrollTargets[this.props.type];
        return (
            <div className={`section-responses scroll-${scrollTarget}`}>
                <h2>
                    { CategoryTitles[this.props.type] }
                </h2>
                { this.props.responses.map(this._mapResponses) }
                <hr />
            </div>
        );
    }
}

SectionView.propTypes = {
    type      : React.PropTypes.string.isRequired,
    responses : React.PropTypes.array.isRequired,
    onChange  : React.PropTypes.func.isRequired
};
