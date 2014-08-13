/** @jsx React.DOM */
define(
[
    "underscore",
    "backbone",
    "react",
    "reflux",

    "actions/actions"
],
function (_, Backbone, React, Reflux, ACTIONS)
{
    return React.createClass(
    {
        render: function()
        {
            var stories = _.map(this.props.stories, this._createStoriesDom);

            return (
                React.DOM.div(null, 
                    React.DOM.h2(null, "Stories for Channel ", this.props.channelId),
                    React.DOM.div(null, 
                        stories
                    )
                )
            )
        },

        /* Private Helpers */

        _createStoriesDom: function(story)
        {
            //var providerLink = "#providers/" + provider.ProviderId;
            return React.DOM.li( {key:story.StoryId}, React.DOM.a( {href:""}, story.StoryName))
        }
    });
});