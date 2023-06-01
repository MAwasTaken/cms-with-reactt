// react
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Login.css';

// packages

// components
import Topbar from '../../Components/Topbar/Topbar';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Input from '../../Components/Form/Input';
import Button from '../../Components/Form/Button';
import { maxValidator, minValidator, requiredValidator } from '../../validators/rules';

// login
function Login() {
	// user login
	const userLogin = (event) => {
		event.preventDefault();

		console.log('user login');
	};

	return (
		<>
			<Topbar />
			<Navbar />
			<section className='login-register'>
				<div className='login'>
					<span className='login__title'>ورود به حساب کاربری</span>
					<span className='login__subtitle'>خوشحالیم دوباره می بینیمت دوست عزیز :)</span>
					<div className='login__new-member'>
						<span className='login__new-member-text'>کاربر جدید هستید؟</span>
						<Link
							className='login__new-member-link'
							to='/register'>
							ثبت نام
						</Link>
					</div>
					<form
						action='#'
						className='login-form'>
						<div className='login-form__username'>
							<Input
								element='input'
								className='login-form__username-input'
								type='text'
								placeholder='نام کاربری یا آدرس ایمیل'
								validation={[requiredValidator(), minValidator(8), maxValidator(20)]}
							/>
							<i className='login-form__username-icon fa fa-user'></i>
						</div>
						<div className='login-form__password'>
							<Input
								element='input'
								className='login-form__password-input'
								type='password'
								placeholder='رمز عبور'
                validation={[requiredValidator(), minValidator(8), maxValidator(18)]}
							/>
							<i className='login-form__password-icon fa fa-lock-open'></i>
						</div>
						<Button
							className='login-form__btn'
							type='submit'
							disabled={true}
							onClick={userLogin}>
							<i className='login-form__btn-icon fas fa-sign-out-alt'></i>
							<span className='login-form__btn-text'>ورود</span>
						</Button>
						<div className='login-form__password-setting'>
							<label className='login-form__password-remember'>
								<Input
									element='input'
									type='checkbox'
									className='login-form__password-checkbox'
								/>
								<span className='login-form__password-text'>مرا به خاطر داشته باش</span>
							</label>
							<label className='login-form__password-forget'>
								<a
									className='login-form__password-forget-link'
									href='#'>
									رمز عبور را فراموش کرده اید؟
								</a>
							</label>
						</div>
					</form>
					<div className='login__des'>
						<span className='login__des-title'>سلام کاربر محترم:</span>
						<ul className='login__des-list'>
							<li className='login__des-item'>
								لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس استفاده کنید.
							</li>
							<li className='login__des-item'>
								ما هرگز اطلاعات محرمانه شما را از طریق ایمیل درخواست نمی کنیم.
							</li>
							<li className='login__des-item'>
								لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
							</li>
						</ul>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

// exports
export default Login;