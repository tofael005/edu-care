import { useForm } from "react-hook-form";
import { useAuth } from "../../../Pages/auth/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTitle from "../../../hooks/useTitle";
import Swal from "sweetalert2";


const AddClass = () => {
    useTitle("Add Class")
    const { register, handleSubmit } = useForm()
    const { user } = useAuth();
    const { axiosSecure } = useAxiosSecure()

    const imageHostingApi = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_API_KEY}`


    const addNewClass = (data) => {
        const formData = new FormData()
        formData.append("image", data.image[0])

        fetch(imageHostingApi, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const newClass = {
                        class_name: data.class_name,
                        class_image: imgResponse.data.display_url,
                        instructor_name: user?.displayName,
                        instructor_email: user?.email,
                        avilable_seats: parseFloat(data.avilable_seats),
                        price: parseFloat(data.price),
                        instructor_photo: user?.photoURL
                    }

                    axiosSecure.post("/add-class", newClass)
                        .then(res => {
                            if (res.data.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Class Added sucessfull',
                                    showConfirmButton: false,
                                    timer: 1500
                                })

                            }

                        })
                }

            })

    }

    return (
        <main>
            <hr className="w-full my-3" />
            <form onSubmit={handleSubmit(addNewClass)} className="px-[100px] py-5" >
                <div className="my-3 text-center">
                    <h2 className="text-2xl font-bold">Add New Class</h2>
                </div>

                <section className="w-full gap-3 md:grid md:grid-cols-2">
                    <div className="w-full my-2">
                        <span className="block font-bold">Class Name</span>
                        <input {...register("class_name", { required: true })} type="text" className="w-full px-4 py-3 mt-3 border rounded outline-0" autoComplete="off" placeholder="class Name" />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Instructor Name</span>
                        <input  {...register("instructor_name")} value={user?.displayName && user?.displayName} type="text" className="w-full px-4 py-3 mt-3 border rounded outline-0" autoComplete="off" disabled />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Instructor Email</span>
                        <input {...register("instructor_email")} type="text" value={user?.email && user?.email} className="w-full px-4 py-3 mt-3 border rounded outline-0" autoComplete="off" disabled />
                    </div>

                    <div className="w-full my-2">
                        <span className="block font-bold">Avilable Seats</span>
                        <input {...register("avilable_seats", { required: true })} type="number" className="w-full px-4 py-3 mt-3 border rounded outline-0" autoComplete="off" />
                    </div>
                    <div className="w-full mt-5">
                        <span className="block font-bold">upload a image</span>
                        <input type="file" {...register("image", { required: true })} className="w-full max-w-xs file-input file-input-bordered" />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Price</span>
                        <input {...register("price", { required: true })} type="number" className="w-full px-4 py-3 mt-3 border rounded outline-0" autoComplete="off" />
                    </div>
                </section>

                <div >
                    <button className="block w-full px-4 py-3 mt-10 text-black rounded bg-sky-300" type="submit">Add Class</button>
                </div>

            </form>
        </main>
    );
};

export default AddClass;