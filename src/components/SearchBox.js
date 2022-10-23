export const SearchBox = ({onChange}) => {
    return (
        <div>
            <input type="text" onChange={e => onChange(e.target.value)} />
        </div>
    )
}