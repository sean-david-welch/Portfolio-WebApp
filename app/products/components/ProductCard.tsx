'use client';

import styles from '../styles/Products.module.css';
import Link from 'next/link';
import Image from 'next/image';
import CheckoutForm from './CheckoutForm';

import { Product } from '@prisma/client';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

interface Props {
    product: Product;
}

const ProductCard = ({ product }: Props) => {
    const { id, name, description, image, stack, price } = product;

    const control = useAnimation();
    const [ref, inView] = useInView();
    const cardVariant = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.2 },
        },
        hidden: { opacity: 0, scale: 0 },
    };

    useEffect(() => {
        if (inView) control.start('visible');
    }, [control, inView]);

    return (
        <motion.div
            className={styles.productCard}
            ref={ref}
            variants={cardVariant}
            initial="hidden"
            animate={control}>
            <Link href={`products/${id}`}>
                <Image
                    src={image ?? '/default.jpg'}
                    alt="product image"
                    height={500}
                    width={650}
                />
                <h1>{name}</h1>
                <p className={styles.description}>{description}</p>
                <ul>
                    {stack?.map((stack, index) => (
                        <button
                            className={styles.stackButton}
                            key={stack + index}>
                            <li>{stack}</li>
                        </button>
                    ))}
                </ul>
                <h1 className={styles.price}>Price: €{price}</h1>
            </Link>
            <CheckoutForm product={product} />
        </motion.div>
    );
};

export default ProductCard;
