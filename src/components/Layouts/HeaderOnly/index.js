import Header from '~/components/Layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div className="">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
