// react
import React from 'react';

// styles
import './Sidebar.css';

// packages

// components

// sidebar
function Sidebar() {
	// jsx
	return (
		<div
			id='sidebar'
			class='col-2'>
			<div class='sidebar-header'>
				<div class='sidebar-logo'>
					<a href='#'>
						<img
							src='/images/logo/Logo.png'
							alt='Logo'
						/>
					</a>
				</div>
				<div class='sidebar-menu-btn'>
					<i class='fas fa-bars'></i>
				</div>
			</div>
			<div class='sidebar-menu'>
				<ul>
					<li class='active-menu'>
						<a href='#'>
							<span>صفحه اصلی</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span>دوره ها</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span>منو ها</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span>مقاله ها</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span>کاربران</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span>کدهای تخفیف</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span>دسته‌بندی‌ها</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

// exports
export default Sidebar;
