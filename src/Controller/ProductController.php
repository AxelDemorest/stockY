<?php

namespace App\Controller;

use App\Entity\Product;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;

class ProductController extends AbstractController
{
    /**
     * @Route("/api/products/{limit}", name="products")
     */
    public function getProducts(SerializerInterface $serializer, ManagerRegistry $doctrine, Request $request, $limit = null): Response
    {
        $param = $request->query->get('orderBy');
        if($param) {
            $orderBy = array('id' => "DESC");
        } else $orderBy = array();
        $data = $doctrine->getRepository(Product::class)->findBy(array(), $orderBy, $limit);
        return new Response($serializer->serialize($data, JsonEncoder::FORMAT));
    }

    /**
     * @Route("/api/single-product/{id}", name="singleProduct")
     */
    public function getSingleProduct(SerializerInterface $serializer, ManagerRegistry $doctrine, Request $request, int $id): Response
    {
        $data = $doctrine->getRepository(Product::class)->find($id);
        return new Response($serializer->serialize($data, JsonEncoder::FORMAT));
    }
}
