// react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// styles
import './Category.css';

// packages

// components
import Topbar from '../../Components/Topbar/Topbar';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import CourseBox from '../../Components/CourseBox/CourseBox';
import Pagination from '../../Components/Pagination/Pagination';

// category
function Category() {
	// url param
	const { categoryName } = useParams();

	// category courses
	const [courses, setCourses] = useState([]);

  // get category courses
	useEffect(() => {
		fetch(`http://localhost:3000/v1/courses/category/${categoryName}`)
			.then((res) => res.json())
			.then((allCourses) => setCourses(allCourses));
	}, []);

	// jsx
	return (
		<>
			<Topbar />
			<Navbar />
			<section className='courses'>
				<div className='container'>
					<div className='courses-top-bar'>
						<div className='courses-top-bar__right'>
							<div className='courses-top-bar__row-btn courses-top-bar__icon--active'>
								<i className='fas fa-border-all courses-top-bar__icon'></i>
							</div>
							<div className='courses-top-bar__column-btn'>
								<i className='fas fa-align-left courses-top-bar__icon'></i>
							</div>

							<div className='courses-top-bar__selection'>
								<span className='courses-top-bar__selection-title'>
									مرتب سازی پیش فرض
									<i className='fas fa-angle-down courses-top-bar__selection-icon'></i>
								</span>
								<ul className='courses-top-bar__selection-list'>
									<li className='courses-top-bar__selection-item courses-top-bar__selection-item--active'>
										مرتب سازی پیش فرض
									</li>
									<li className='courses-top-bar__selection-item'>مرتبت سازی بر اساس محبوبیت</li>
									<li className='courses-top-bar__selection-item'>مرتبت سازی بر اساس امتیاز</li>
									<li className='courses-top-bar__selection-item'>مرتبت سازی بر اساس آخرین</li>
									<li className='courses-top-bar__selection-item'>مرتبت سازی بر اساس ارزان ترین</li>
									<li className='courses-top-bar__selection-item'>مرتبت سازی بر اساس گران ترین</li>
								</ul>
							</div>
						</div>

						<div className='courses-top-bar__left'>
							<form
								action='#'
								className='courses-top-bar__form'>
								<input
									type='text'
									className='courses-top-bar__input'
									placeholder='جستجوی دوره ...'
								/>
								<i className='fas fa-search courses-top-bar__search-icon'></i>
							</form>
						</div>
					</div>
					<div className='courses-content'>
						<div className='container'>
							<div className='row'>
								{/* {courses.map((course) => (
									<CourseBox {...course} />
								))} */}
							</div>
						</div>
					</div>
					<Pagination />
				</div>
			</section>
			<Footer />
		</>
	);
}

// exports
export default Category;
