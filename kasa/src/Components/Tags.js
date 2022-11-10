function Tags({ tags, classname }) {
    return (
        <div className={classname}>
            {tags.map(tag => <p key={tag.toString()}>{tag}</p>)}
        </div>
    )
}

export default Tags