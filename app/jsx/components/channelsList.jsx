/** @jsx React.DOM */
define(
[
    "underscore",
    "backbone",
    "react",
    "reflux",

    "actions/actions",
    "stores/channelsStore"
],
function (_, Backbone, React, Reflux)
{
    return React.createClass(
    {
        render: function()
        {
            var channels = _.map(this.props.channels, this._createChannelDom);

            return (
                <div>

                    <h2>Channels for Provider {this.props.providerId}</h2>
                    <div>
                        {channels}
                    </div>
                </div>
            )
        },

        /* Private DOM Event Handlers */


        /* Private DOM Helpers */

        _createChannelDom: function(channel)
        {
            var channelLink = "#providers/" + channel.ChannelProviderId + "/channels/" + channel.ChannelId;
            return <li key={channel.ChannelId}><a href={channelLink}>{channel.ChannelName}</a></li>
        }
    });
});
