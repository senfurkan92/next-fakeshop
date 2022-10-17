import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import { useRouter } from 'next/router'

const AppFilterForm = (): JSX.Element => {
    const minRef = useRef<HTMLInputElement>(null);
    const maxRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLInputElement>(null);

    const router = useRouter()

    const searchHandler = () => {
        router.push(`/products/${contentRef.current!.value}/${minRef.current!.value}/${maxRef.current!.value}`)
    }

    return (
        <>
            <div>
                <div className="form-control">
                    <label className="input-group input-group-sm">
                        <span className="bg-secondary text-secondary-content">ABC</span>
                        <input
                            ref={contentRef}
                            type="text"
                            step="0.01"
                            placeholder="Type here content..."
                            className="input input-bordered input-sm"
                        />
                    </label>
                </div>
            </div>
            <div>
                <div className="form-control">
                    <label className="input-group input-group-sm">
                        <span className="bg-secondary text-secondary-content">$</span>
                        <input
                            ref={minRef}
                            min={0}
                            type="number"
                            step="0.01"
                            placeholder="Type here min price..."
                            className="input input-bordered input-sm"
                        />
                    </label>
                </div>
            </div>
            <div>
                <div className="form-control">
                    <label className="input-group input-group-sm">
                        <span className="bg-secondary text-secondary-content">$</span>
                        <input
                            ref={maxRef}
                            min={0}
                            type="number"
                            placeholder="Type here max price..."
                            className="input input-bordered input-sm"
                        />
                    </label>
                </div>
            </div>
            <div>
                <button className="btn btn-sm btn-outline btn-secondary" onClick={searchHandler}>
                    <BsSearch />
                </button>
            </div>
        </>
    );
};

export default AppFilterForm;
