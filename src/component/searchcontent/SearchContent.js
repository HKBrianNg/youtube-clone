import React from 'react';
import TuneSharpIcon from '@mui/icons-material/TuneSharp';
import ChannelRow from '../channelrow/ChannelRow';
import VideoRow from '../videorow/VideoRow';
import './SearchContent.css';


function SearchContent() {
    return (
        <div className='searchContent'>
            <div className='searchContent__filter'>
                <TuneSharpIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                Channel="Clever Programmer"
                verified
                subs="695K"
                noOfVideos={382}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the..."
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training...check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with React JS for Beginners"
                image="https://media.istockphoto.com/photos/life-balance-choices-signpost-with-sunrise-sky-backgrounds-picture-id660654466?k=20&m=660654466&s=612x612&w=0&h=tjXfj9m7WZ5wzA5ontHE7jgbNb-y338SJfWGdSi6v-k="
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training...check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with React JS for Beginners"
                image="https://media.istockphoto.com/photos/life-balance-choices-signpost-with-sunrise-sky-backgrounds-picture-id660654466?k=20&m=660654466&s=612x612&w=0&h=tjXfj9m7WZ5wzA5ontHE7jgbNb-y338SJfWGdSi6v-k="
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training...check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with React JS for Beginners"
                image="https://media.istockphoto.com/photos/life-balance-choices-signpost-with-sunrise-sky-backgrounds-picture-id660654466?k=20&m=660654466&s=612x612&w=0&h=tjXfj9m7WZ5wzA5ontHE7jgbNb-y338SJfWGdSi6v-k="
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training...check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with React JS for Beginners"
                image="https://media.istockphoto.com/photos/life-balance-choices-signpost-with-sunrise-sky-backgrounds-picture-id660654466?k=20&m=660654466&s=612x612&w=0&h=tjXfj9m7WZ5wzA5ontHE7jgbNb-y338SJfWGdSi6v-k="
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training...check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with React JS for Beginners"
                image="https://media.istockphoto.com/photos/life-balance-choices-signpost-with-sunrise-sky-backgrounds-picture-id660654466?k=20&m=660654466&s=612x612&w=0&h=tjXfj9m7WZ5wzA5ontHE7jgbNb-y338SJfWGdSi6v-k="
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training...check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with React JS for Beginners"
                image="https://media.istockphoto.com/photos/life-balance-choices-signpost-with-sunrise-sky-backgrounds-picture-id660654466?k=20&m=660654466&s=612x612&w=0&h=tjXfj9m7WZ5wzA5ontHE7jgbNb-y338SJfWGdSi6v-k="
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training...check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with React JS for Beginners"
                image="https://media.istockphoto.com/photos/life-balance-choices-signpost-with-sunrise-sky-backgrounds-picture-id660654466?k=20&m=660654466&s=612x612&w=0&h=tjXfj9m7WZ5wzA5ontHE7jgbNb-y338SJfWGdSi6v-k="
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training...check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with React JS for Beginners"
                image="https://media.istockphoto.com/photos/life-balance-choices-signpost-with-sunrise-sky-backgrounds-picture-id660654466?k=20&m=660654466&s=612x612&w=0&h=tjXfj9m7WZ5wzA5ontHE7jgbNb-y338SJfWGdSi6v-k="
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training...check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with React JS for Beginners"
                image="https://media.istockphoto.com/photos/life-balance-choices-signpost-with-sunrise-sky-backgrounds-picture-id660654466?k=20&m=660654466&s=612x612&w=0&h=tjXfj9m7WZ5wzA5ontHE7jgbNb-y338SJfWGdSi6v-k="
            />

        </div>
    )
}

export default SearchContent;