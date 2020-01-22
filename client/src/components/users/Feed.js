import React, {Component} from 'react';
const Feed = ({entries, onLoadMore}) => {
    console.log("entriesentriesentries", entries)
    return (

        <div className="container">
            <div className="row">

                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <b><p className="text-center">Books</p></b>
                    <ul class="list-group">
                        {
                            entries.map((item, index) =>
                                <li class="list-group-item">{item.title}</li>
                            )}
                    </ul>

                    {entries.length <= 20 ?
                        <button className="btn-primary" onClick={() => onLoadMore(entries.length)}>See
                            more</button> : ""}
                </div>
                <div className="col-md-4">

                </div>

            </div>

        </div>)

}

export default Feed;

