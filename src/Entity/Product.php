<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ProductRepository::class)
 */

#[ApiResource(
    itemOperations: [
        'put',
        'delete',
        'get' => [
            'normalization_context' => ['groups' => ['product:item:read']]
        ]
    ],
    normalizationContext: ['groups' => ['product:collection:read']]
)]
/*#[ApiFilter(OrderFilter::class, properties: ['id', 'date'], arguments: ['orderParameterName' => 'order'])]*/
class Product
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    #[Groups(['product:collection:read'])]
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    #[Groups(['product:item:read', 'product:collection:read'])]
    private $name;

    /**
     * @ORM\Column(type="integer")
     */
    #[Groups(['product:item:read', 'product:collection:read'])]
    private $price;

    /**
     * @ORM\Column(type="string", length=255)
     */
    #[Groups(['product:item:read', 'product:collection:read'])]
    private $picture;

    /**
     * @ORM\Column(type="integer")
     *
     */
    #[Groups(['product:item:read'])]
    private $stock;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    #[Groups(['product:item:read'])]
    private $description;

    /**
     * @ORM\ManyToMany(targetEntity=Category::class, inversedBy="products")
     */
    #[Groups(['product:item:read'])]
    private $category;

    public function __construct()
    {
        $this->category = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(int $stock): self
    {
        $this->stock = $stock;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection|Category[]
     */
    public function getCategory(): Collection
    {
        return $this->category;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->category->contains($category)) {
            $this->category[] = $category;
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        $this->category->removeElement($category);

        return $this;
    }
}
